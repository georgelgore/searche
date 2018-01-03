class Topic < ApplicationRecord
  belongs_to :user
  has_many :articles, dependent :destroy
end
