class Users < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name, null:false, default: ""

      t.timestamps
    end
  end
end
