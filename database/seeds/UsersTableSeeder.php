<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        $users = array(
            ['name' => 'admin', 'email' => 'admin@admin.admin', 'password' => Hash::make('123456')],
            ['name' => 'user1', 'email' => 'user1@user1.user1', 'password' => Hash::make('123456')],
            ['name' => 'user2', 'email' => 'user2@user2.user2', 'password' => Hash::make('123456')],
            ['name' => 'user3', 'email' => 'user3@user3.user3', 'password' => Hash::make('123456')],
        );
    }
}
