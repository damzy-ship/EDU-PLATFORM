/*
  # Add Updates Channel Feature

  1. New Tables
    - `update_channels`
      - `id` (uuid, primary key)
      - `name` (text)
      - `department` (text)
      - `year` (text)
      - `created_at` (timestamp)

    - `channel_updates`
      - `id` (uuid, primary key)
      - `channel_id` (uuid, foreign key)
      - `content` (text)
      - `content_type` (text - 'text', 'voice', 'image', 'document')
      - `file_url` (text, nullable)
      - `created_at` (timestamp)

    - `channel_subscriptions`
      - `channel_id` (uuid, foreign key)
      - `user_id` (uuid, foreign key)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create update_channels table
CREATE TABLE IF NOT EXISTS update_channels (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  department text NOT NULL,
  year text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create channel_updates table
CREATE TABLE IF NOT EXISTS channel_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  channel_id uuid NOT NULL REFERENCES update_channels(id) ON DELETE CASCADE,
  content text,
  content_type text NOT NULL CHECK (content_type IN ('text', 'voice', 'image', 'document')),
  file_url text,
  created_at timestamptz DEFAULT now()
);

-- Create channel_subscriptions table
CREATE TABLE IF NOT EXISTS channel_subscriptions (
  channel_id uuid REFERENCES update_channels(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (channel_id, user_id)
);

-- Enable RLS
ALTER TABLE update_channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE channel_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE channel_subscriptions ENABLE ROW LEVEL SECURITY;

-- Policies for update_channels
CREATE POLICY "Users can view all channels"
  ON update_channels
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for channel_updates
CREATE POLICY "Users can view updates for subscribed channels"
  ON channel_updates
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM channel_subscriptions
      WHERE channel_id = channel_updates.channel_id
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can create updates"
  ON channel_updates
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.uid() = id
      AND role = 'admin'
    )
  );

-- Policies for channel_subscriptions
CREATE POLICY "Users can manage their own subscriptions"
  ON channel_subscriptions
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());