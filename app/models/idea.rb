class Idea < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  validates :body, presence: true, uniqueness: true

  has_one :quality
end
