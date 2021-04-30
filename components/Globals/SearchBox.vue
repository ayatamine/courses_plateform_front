<template>
                    <div class="search-boxed">
                        <div class="search-box">
                            <form method="post" action="contact.html">
                                <div class="form-group">
                                    <input type="search" name="search-field" value="" placeholder="What do you want to learn?" required>
                                    <button type="submit"><span class="icon fa fa-search"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
</template>

<script>
export default {

}
</script>

<style>
.page-title .search-box .form-group button{

}
.page-title .search-box .form-group input[type="text"]:focus, .page-title .search-box .form-group input[type="search"]:focus
{
  border-color: #ff5773
}
.page-title .search-box .form-group button{
  background:#ff5773;
}
</style>
