<template>
                    <div class="search-boxed">
                        <div class="search-box">
                            <p class="alert alert-danger alert-dismissable fade show" role="alert" v-show="notAddedYet">
                              <strong >this feature is not added yet</strong>
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </p>
                            <form method="post" @keydown.prevent="notAddedYet = true">
                                <div class="form-group">
                                    <input type="search" name="search-field" value="" placeholder="What do you want to learn?" required>
                                    <button type="submit" @click.prevent><span class="icon fa fa-search"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
</template>

<script>
export default {
  data(){
    return {
      notAddedYet:false
    }
  }
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
