class User < ApplicationRecord
  has_many :topics
  has_many :articles, through: :topics

  validates :username, uniqueness: true, presence: true
end
