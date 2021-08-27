class Ideas < ActiveRecord::Migration[6.1]
  def change
    create_table :ideas do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title, null: false
      t.text :elevatorpitch, null: false
      t.boolean :solved, default: false

      t.timestamps
    end
  end
end
