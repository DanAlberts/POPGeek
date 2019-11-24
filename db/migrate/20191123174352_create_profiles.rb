class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.belongs_to :user
      t.boolean :online_status
      t.string :greeting
      t.text :content
      t.string :location
      t.integer :views
      t.timestamps
    end
  end
end
