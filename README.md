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
# Documentation Link Sign in/up
-  https://documenter.getpostman.com/view/14122416/TWDTNz7p
<<<<<<< HEAD
=======

# Feature Board & Team
- validation still on progress
# Documentation Link Team & Board
-  https://documenter.getpostman.com/view/13078438/Tz5i9fdh
>>>>>>> b6ee9593b84791419b15afa4cf7aee750f1b67e2

# Feature Board & Team
- validation still on progress
# Documentation Link Team & Board
-  https://documenter.getpostman.com/view/13078438/Tz5i9fdh

<<<<<<< HEAD
# Feature Board & Team
- validation still on progress
# Documentation Link Team & Board
-  https://documenter.getpostman.com/view/13078438/Tz5i9fdh

# Feature List & card
TBA
# Documentation
list api documentation : https://documenter.getpostman.com/view/13866425/TWDfCY9n

card api documentation : https://documenter.getpostman.com/view/13866425/Tz5iAgm7
=======
# Feature List & card
TBA
# Documentation
list api documentation : https://documenter.getpostman.com/view/13866425/TWDfCY9n

card api documentation : https://documenter.getpostman.com/view/13866425/Tz5iAgm7

# Feature Label & Comment
nyusul
# Documentation Label & Comment
label api documentation https://documenter.getpostman.com/view/13883114/Tz5iBgpp

Comment api documentation https://documenter.getpostman.com/view/13883114/Tz5jczV6
>>>>>>> b6ee9593b84791419b15afa4cf7aee750f1b67e2
