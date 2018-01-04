class Article < ApplicationRecord
  belongs_to :topic

  validates :topic_id, presence: true
  validates :url, presence: true
end
