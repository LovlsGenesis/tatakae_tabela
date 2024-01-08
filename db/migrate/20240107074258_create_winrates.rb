class CreateWinrates < ActiveRecord::Migration[7.0]
  def change
    create_table :winrates do |t|
      t.float :wins, default: 0.0
      t.float :loses, default: 0.0
      t.float :draws, default: 0.0

      t.timestamps
    end

    add_reference :winrates, :member, foreign_key: true
  end
end
