# react-redux-firebase-slack-chat

1. Project Setup `yarn create react-app .`
2. Add dependencies and change setup project
3. Setup firebase
4. Create register form
5. Add register user with email and password
6. Create errors upon registaration and show loading state
7. Add name and avatar to users, add new users to database
8. Create login form and functionality
9. Set up redux to make user data available on global state
10. Add Spinner Component for Loading State
11. Scaffold App Components
12. App Header / UserPanel Dropdown
13. Add signout functionality, clear user action
14. Passing Redux state via props
15. Add Avatar to User Dropdown
16. Add Channels Component
17. Create Modal for Adding Channels
18. Create Channels Collection, Add First Channel to Database
19. Display Channels with child_added Listener
20. Put Channel on Global State, Add channel_reducer
21. Set First Channel on Page Load, Show Active Channel
22. Remove Listeners with componentWillUnmount
23. Scaffold ColorPanel / Message Components
24. Create Messages Collection, Add First Message to Database
25. Controlled Input to Clear Message, Disable Button onLoading State
26. Display Messages, Create Message Component
27. Create File Modal to Upload File
28. Put Media File in State, Add Mimetype Validation
29. Upload Image File, Post Image Message
30. ProgressBar Component to Represent Image Upload
31. Options for Displaying ProgressBar
32. Add Channel Title / Users Count to Messages Header
33. Add Ability to Search Messages
34. Create DirectMessages Component
35. Add Users to DirectMessages Component, Show If Online/Offline
36. Put DirectMessage Channel Data in Global State, Set as Private Channels
37. Functionality to Add Messages / Images to Private Channels
38. Display Active DirectMessage Channel
39. Add Notifications to Public Channel
40. Add Starred Component to Hold Starred (Favorited) Channels
41. Update 'Starred' Property for User Data Upon Starring Channel
42. Display Starred Channels in Starred Component
43. Scaffold MetaPanel Component
44. Display Channel Info in MetaPanel
45. Display Top Posters for each Channel in MetaPanel
46. Add Color Picker Modal to ColorPanel
47. Attach Chosen Colors to User Data
48. Display Saved User Colors as Icons, Change App Colors on Click
49. Create Change Avatar Modal
50. Crop Uploaded Image with AvatarEditor
51. Upload Cropped Image to Firebase, Put on User Profile
52. Add Typing Collection to Track When Other Users Typing
53. Add Typing Component / Animation, Display in Messages
54. Add Typing Listeners to See When Other Users Typing
55. Emoji Picker to Add Emojis to Messages
56. Automatic Scroll to Bottom upon New Message
57. Show Message Skeleton when Messages Loading
58. Create Key Combo Shortcuts to Send Messages
59. Remove Listeners upon Component Unmount
60. Write Firebase Storage Rules for Media Files
61. Write Database Rules for App Data