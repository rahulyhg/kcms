<?php

use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 100; $i++) { 
            DB::table('tasks')->insert([
                'title' => 'Task randomize '. str_random(10),
                'isDone' => false
            ]);
        }
    }
}
