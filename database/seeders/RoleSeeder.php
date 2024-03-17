<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'create-user']);
        Permission::create(['name' => 'edit-user']);
        Permission::create(['name' => 'see-user']);
        Permission::create(['name' => 'delete-user']);

        Permission::create(['name' => 'create-article']);
        Permission::create(['name' => 'edit-article']);
        Permission::create(['name' => 'see-article']);
        Permission::create(['name' => 'delete-article']);

        Role::create(['name' => 'admin']);
        Role::create(['name' => 'stakeholders']);
        Role::create(['name' => 'guests']);

        $roleAdmin = Role::findByName('admin');
        $roleAdmin->givePermissionTo('create-user');
        $roleAdmin->givePermissionTo('edit-user');
        $roleAdmin->givePermissionTo('see-user');
        $roleAdmin->givePermissionTo('delete-user');

        $roleStakeholders = Role::findByName('stakeholders');
        $roleStakeholders->givePermissionTo('create-article');
        $roleStakeholders->givePermissionTo('edit-article');
        $roleStakeholders->givePermissionTo('see-article');
        $roleStakeholders->givePermissionTo('delete-article');

        $roleGuests = Role::findByName('guests');
        $roleGuests->givePermissionTo('see-article');
    }
}
