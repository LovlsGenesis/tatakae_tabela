class CreateConfigs < ActiveRecord::Migration[7.0]
  def change
    create_table :configs do |t|
      t.date :season_start

      t.timestamps
    end
  end
end
