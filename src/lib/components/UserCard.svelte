<script>
    let {fullname, username, email, phone, city} = $props();

</script>

<div class="card p-3 mb-3 shadow-sm border-primary border-start border-4 rounded-3">
    <h2 class="card-title h5 fw-bold text-primary">{fullname}</h2>
    <p class="card-text text-body-secondary">Username: {username}</p>
    <p class="card-text text-body-secondary">Email: {email}</p>
    <p class="card-text text-body-secondary">Phone: {phone}</p>
    <p class="card-text text-body-secondary">City: {city}</p>
</div>