<script lang="ts">
    import {getUsers} from "../services/users.js";
    import type {User} from "../services/users.js";
    import Loader from "./Loader.svelte";
    import UserGrid from "./UserGrid.svelte";

    let users: User[] = $state([]);
    let query: string = $state('');
    let filteredUsers: User[] = $derived(users.filter(user => user.name.toLowerCase().startsWith(query.toLowerCase())));

    async function searchUsers() {
        users = await getUsers();
    }

    $effect(() => {
        searchUsers();
    });

</script>

<div class="mb-3 p-3 rounded-3 bg-body-tertiary border">
    <label for="search" class="form-label fw-semibold text-primary">Buscar usuarios:</label>
    <input id="search" name="search" type="text" placeholder="Buscar usuarios..." bind:value={query} class="form-control mb-3 shadow-sm border-primary" />
    {#await searchUsers()}
        <Loader />
    {:then users} 
        {#if filteredUsers.length > 0}
            <UserGrid users={filteredUsers} />
        {:else}
            <p class="alert alert-warning shadow-sm">No se encontraron usuarios.</p>
        {/if}
    {/await}
    
</div>