class Topic < ApplicationRecord
  belongs_to :user
  has_many :articles, dependent: :destroy

  validates :title, uniqueness: true, presence: true
end
