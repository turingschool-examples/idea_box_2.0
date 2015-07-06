class CreateQuality < ActiveRecord::Migration
  def change
    create_table :qualities do |t|
      t.string :option
    end
  end
end
