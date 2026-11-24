<script>
    import UserCard from "./UserCard.svelte";

    let { users } = $props();
</script>

<div class="mb-3 p-3 rounded-3 bg-body-tertiary">
    {#each users as user (user.id)}
        <UserCard 
            fullname={user.name} 
            username={user.username} 
            email={user.email} 
            phone={user.phone} 
            city={user.city} />
    {/each}
</div>