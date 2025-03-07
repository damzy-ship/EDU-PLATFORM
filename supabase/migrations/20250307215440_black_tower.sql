/*
  # Add voting and content contribution features

  1. New Tables
    - `course_votes`
      - `id` (uuid, primary key)
      - `course_id` (uuid, foreign key)
      - `user_id` (uuid, foreign key)
      - `vote_type` (boolean - true for upvote, false for downvote)
      - `created_at` (timestamp)

    - `contributed_content`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `file_url` (text)
      - `content_type` (text - 'material' or 'past_question')
      - `course_id` (uuid, foreign key)
      - `contributor_id` (uuid, foreign key)
      - `status` (text - 'pending', 'approved', 'rejected')
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create course_votes table
CREATE TABLE IF NOT EXISTS course_votes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  vote_type boolean NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(course_id, user_id)
);

-- Create contributed_content table
CREATE TABLE IF NOT EXISTS contributed_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  file_url text NOT NULL,
  content_type text NOT NULL CHECK (content_type IN ('material', 'past_question')),
  course_id uuid NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  contributor_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE course_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE contributed_content ENABLE ROW LEVEL SECURITY;

-- Policies for course_votes
CREATE POLICY "Users can create their own votes"
  ON course_votes
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own votes"
  ON course_votes
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read vote counts"
  ON course_votes
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for contributed_content
CREATE POLICY "Users can create content"
  ON contributed_content
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = contributor_id);

CREATE POLICY "Users can view approved content"
  ON contributed_content
  FOR SELECT
  TO authenticated
  USING (status = 'approved' OR auth.uid() = contributor_id);

-- Create functions for vote counting
CREATE OR REPLACE FUNCTION get_course_votes(course_id uuid)
RETURNS TABLE (upvotes bigint, downvotes bigint)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*) FILTER (WHERE vote_type = true) as upvotes,
    COUNT(*) FILTER (WHERE vote_type = false) as downvotes
  FROM course_votes
  WHERE course_votes.course_id = $1;
END;
$$;