class CreateTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :topics do |t|
      t.belongs_to :user, foreign_key: true
      t.string :title

      t.timestamps
    end
  end
end
