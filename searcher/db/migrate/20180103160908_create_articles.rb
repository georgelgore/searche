class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.belongs_to :topic, foreign_key: true
      t.string :url
      t.text :description

      t.timestamps
    end
  end
end
