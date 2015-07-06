class Quality < ActiveRecord::Base
  validates :option, presence: true, uniqueness: true
end
