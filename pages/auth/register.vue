<template>
    <div>
        <section class="page-title">
            <div class="auto-container">
                    <h1>Register</h1>

                    <!-- Search Boxed -->
                    <search-box/>
            </div>
        </section>
        <section class="register-section">
		 <div class="auto-container">
			<div class="register-box">

				<!-- Title Box -->
				<div class="title-box">
					<h2>Register</h2>
					<div class="text"><span class="theme_color">Welcome!</span> Please confirm that you are visiting</div>
				</div>

				<!-- Login Form -->
				<div class="styled-form">
					<form method="post" action="index.html">

						<div class="row clearfix">

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<label>First Name</label>
								<input type="text" name="username" value="" placeholder="First Name" required>
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<label>Last Name</label>
								<input type="text" name="username" value="" placeholder="Last Name" required>
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<label>Email Address</label>
								<input type="email" name="email" value="" placeholder="abcd@gmail.com" required>
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<label>Phone Number</label>
								<input type="text" name="phone" value="" placeholder="+1 (800) 123-4567" required>
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<label>Password</label>
								<span class="eye-icon flaticon-eye"></span>
								<input type="password" name="password" value="" placeholder="Password" required>
							</div>

							<!-- Form Group -->
							<div class="form-group col-lg-6 col-md-12 col-sm-12">
								<label>Confirm Password</label>
								<span class="eye-icon flaticon-eye"></span>
								<input type="password" name="password" value="" placeholder="Password" required>
							</div>

							<div class="form-group col-lg-12 col-md-12 col-sm-12">
								<div class="row clearfix">
									<!-- Column -->
									<div class="column col-lg-3 col-md-4 col-sm-12">
										<div class="radio-box">
											<input type="radio" name="remember-password" id="type-1">
											<label for="type-1">Male</label>
										</div>
									</div>
									<!-- Column -->
									<div class="column col-lg-3 col-md-4 col-sm-12">
										<div class="radio-box">
											<input type="radio" name="remember-password" id="type-2">
											<label for="type-2">Female</label>
										</div>
									</div>
									<!-- Column -->
									<div class="column col-lg-3 col-md-4 col-sm-12">
										<div class="radio-box">
											<input type="radio" name="remember-password" id="type-3">
											<label for="type-3">Others</label>
										</div>
									</div>
									<!-- Column -->
									<div class="column col-lg-12 col-md-12 col-sm-12">
										<div class="check-box">
											<input type="checkbox" name="remember-password" id="type-4">
											<label for="type-4">I agree the user agreement and <a href="privacy.html">Terms & Conditions</a></label>
										</div>
									</div>
								</div>
							</div>

							<div class="form-group col-lg-12 col-md-12 col-sm-12 text-center">
								<button type="button" class="theme-btn btn-style-three"><span class="txt">Sign Up <i class="fa fa-angle-right"></i></span></button>
							</div>

							<div class="form-group col-lg-12 col-md-12 col-sm-12">
								<div class="users">Already have an account? <a href="login.html">Sign In</a></div>
							</div>

						</div>

					</form>
				</div>

			</div>
		 </div>
	    </section>
    </div>
</template>

<script>
import SearchBox from '../../components/Globals/SearchBox.vue'
export default {
  components: { SearchBox },

}
</script>

<style>

</style>