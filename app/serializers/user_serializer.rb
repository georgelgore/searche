class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username

  has_many :topics
  has_many :articles, through: :topics
end
