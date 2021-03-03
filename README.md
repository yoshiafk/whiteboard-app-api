# General purpose
Create register, login and user profile.

# Features done:
1. Create signup/in user credential.
2. Signup/in using Google & Facebook Auth then save their google profile in our DB.
3. Update password for the logged in user.
4. Forgot password (request link sent to user's email). Using google mail API
5. Reset password (user's can click link sent to reset password).
6. Differentiate access: 'admin' and 'user'. Admin can retrieve all registered user's data.
7. Implement security related to user's password:

- Signup validation (ex: name can not contain non-alphanumeric, email validation).
- Exclude password when retrieving user's data -> even 'admin' can not have access to user's password.
- Check if token starts with 'Bearer', Check if user still exists even if they carry valid token, Check if user changed password after token was issued.
- Check if the user logged in is the real user -> confirm the old password for update password feature.
- new_password can not be equal to the old password.
- Reset password only if the token has not expired (here set to 2 hours).
8. Upload image for user's profile picture. Set to default one when it is not available.

# Optional:

- Email activation -> only activated user will be saved in DB. But depends on FE.

# Forgot-reset password docs
![](img/Email%20forgot%20password.png)
![](img/Token%20reset%20password.png)
![](img/Reset%20password.png)

# Update password (only logged in user)
![](img/Update%20password.png)


# Feature Board & Team
=======
Board & team documentation
=======
- ![image](/uploads/b5e7b2e2ac0e8dca7146437b51867f3b/image.png)
- ![image](/uploads/f4500d97ca4a722348eec90b404d6353/image.png)
- ![image](/uploads/9f52413e173ab006e81b5570c04cbf5f/image.png)
- ![image](/uploads/63faf4cfb6a03a12476bf195a6a5c6f9/image.png)
- ![image](/uploads/dcc6c9ef695aec2007c5c7a5454d6963/image.png)
- ![image](/uploads/1d451b21e688937c166fbc8e19007cc8/image.png)
- ![image](/uploads/034c6c4ed4dcb127af73f33da8794229/image.png)