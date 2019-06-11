
export const USERS = [
  {
    "id": 'galhhhoscar',
    "email": 'student@gmail.com',
    "username": "duncan",
    // ADMIN user (password is Password10) can read all lessons and also can login on behalf of other users
    "passwordDigest": '$2b$10$dOc2hrrUnXYOYvbnLZAtye8hghF1T9q0lT/cYFfAhayY7FynyHiWa',
    "bio":"",
    "image": "https://app.visitluxembourg.com/images/24344-resize-1170x1170x70.jpg",
    "followingPost": [
      "hallo-test-aong5g",
      "repeat-5gu6ud",
      "angular-ij00ad"
    ],
    "followingPeople": [
      "johnny"
    ],

  },

  {
    "id": "johnny",
    "email": "stud@gmail.com",
    "username": "john",
    // ADMIN user (password is Password10) can read all lessons and also can login on behalf of other users
    "passwordDigest": "$2b$10$dOc2hrrUnXYOYvbnLZAtye8hghF1T9q0lT/cYFfAhayY7FynyHiWa",
    "bio":"",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQi0DmnSVnfwnZcfZzxypJuagh9A5qfgYsChRoxocXLjzOcXw",
    "followingPost": [
      "asd-4smaon",
      "asd-xhc1bq"
    ],
    "followingPeople": [
      "galhhhoscar",
    ],
  },

  {
    "id": "77dba8b8",
    "email": "vladll@vlad.vld.com",
    "username": "vlad",
    "passwordDigest": "$2b$10$yBRIOXOAXjT5WXgdmG7Hp.kLyzopUjKKgaBO0rk5oMLdt8hjPtypy",
    "bio": "",
    "image": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "followingPost": [],
    "followingPeople": [],
  }

];

export const POSTS =  [
  {
    "title": 'Test123',
    "slug": "asd-4smaon",
    "body": "This is a test.",
    "description": "Testing",
    "createdAt": "2019-04-16T09:48:34.156Z",
    "updatedAt": "2019-04-16T09:48:34.156Z",
    "commentId":'123',
    "tagList": [
      "test",
      "dragons"
    ],
    "author": {
      "id":"galhhhoscar",
      "username": "duncan",
      "image": "https://app.visitluxembourg.com/images/24344-resize-1170x1170x70.jpg",
    },
  },
  {
    "title": "Another title",
    "slug": "asd-xhc1bq",
    "body": "Here we have it",
    "description": "Another",
    "createdAt": "2019-04-16T08:54:40.728Z",
    "updatedAt": "2019-04-16T08:54:40.728Z",
    "commentId":'4588',
    "tagList": [
      "test"
    ],
    "author": {
      "id":"galhhhoscar",
      "username": "duncan",
      "image": "https://app.visitluxembourg.com/images/24344-resize-1170x1170x70.jpg",
    },
  },
  {
    "title": "1914 translation by H. Rackham",
    "slug": "Rackham-e1yohf",
    "body": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    "description": "Ipsum translation",
    "createdAt": "2019-04-16T08:28:13.489Z",
    "updatedAt": "2019-04-16T08:28:13.489Z",
    "commentId":'118',
    "tagList": ["lorem","ipsum","time"],
    "author": {
      "id": "johnny",
      "username": "john",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQi0DmnSVnfwnZcfZzxypJuagh9A5qfgYsChRoxocXLjzOcXw",
    },
  },
  {
    "title": "New arti",
    "slug": "new-wsu3vr",
    "body": "tester",
    "description": "my artical",
    "createdAt": "2019-04-16T06:26:13.885Z",
    "updatedAt": "2019-04-16T06:26:13.885Z",
    "commentId":'475',
    "tagList": ["time"],
    "author": {
      "id": "johnny",
      "username": "john",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQi0DmnSVnfwnZcfZzxypJuagh9A5qfgYsChRoxocXLjzOcXw",
    },
  },
  {
    "title": "Lorem ipsum",
    "slug": "snv-yxgheg",
    "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "description": "123",
    "createdAt": "2019-04-16T04:20:06.327Z",
    "updatedAt": "2019-04-16T04:20:06.327Z",
    "commentId":'486',
    "tagList": ["lorem","ipsum"],
    "author": {
      "id":"77dba8b8",
      "username": "vlad",
      "image": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  },
  {
    "title": "Test",
    "slug": "test-o67g1x",
    "body": "Test",
    "description": "Test",
    "createdAt": "2019-04-16T04:15:44.631Z",
    "updatedAt": "2019-04-16T04:15:44.631Z",
    "commentId":'1412',
    "tagList": ["test"],
    "author": {
      "id":"77dba8b8",
      "username": "vlad",
      "image": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  },
  {
    "title": "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    "slug": "integer-posuere-erat-a-ante-venenatis-dapibus-posuere-velit-aliquet-b2s90",
    "body": "Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.\nNulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.",
    "description": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    "createdAt": "2019-04-15T20:35:03.071Z",
    "updatedAt": "2019-04-15T20:35:03.071Z",
    "commentId":'21488',
    "tagList": [],
    "author": {
      "id":"77dba8b8",
      "username": "vlad",
      "image": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  },
  {
    "title": "angular 7 hallo",
    "slug": "hallo-test-aong5g",
    "body": "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.",
    "description": "Angular 7 project testing",
    "createdAt": "2019-04-15T19:30:49.142Z",
    "updatedAt": "2019-04-15T19:30:49.142Z",
    "commentId":'988',
    "tagList": ["angular","coffee"],
    "author": {
      "id": "johnny",
      "username": "john",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQi0DmnSVnfwnZcfZzxypJuagh9A5qfgYsChRoxocXLjzOcXw",
    },
  },
  {
    "title": "repeat",
    "slug": "repeat-5gu6ud",
    "commentId":'4',
    "body": "repeat text repeat text",
    "createdAt": "2019-04-15T18:34:51.385Z",
    "updatedAt": "2019-04-15T18:34:51.385Z",
    "tagList": ["coffee"],
    "description": "repeating",
    "author": {
      "id":"77dba8b8",
      "username": "vlad",
      "image": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  },
  {
    "title": "Why do we use it?",
    "slug": "eee-c6d86u",
    "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "description": "Lorem ipsum stuff",
    "createdAt": "2019-04-15T16:51:57.561Z",
    "updatedAt": "2019-04-15T16:51:57.561Z",
    "commentId":'42121',
    "tagList": ["lorem","ipsum","coffee"],
    "author": {
      "id": "johnny",
      "username": "john",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQi0DmnSVnfwnZcfZzxypJuagh9A5qfgYsChRoxocXLjzOcXw",
    },
  },
  {
    "title": "Angular stuff",
    "slug": "angular-ij00ad",
    "body": "In this blog post, we’re going to look at a new API in Angular CLI, which allows you to add CLI features and augment existing ones. We’ll discuss how to interact with this API and what are the extension points which allow you to add additional features to the CLI.",
    "description": "Introducing CLI Builders",
    "commentId":'4874418',
    "createdAt": "2019-04-15T15:10:56.040Z",
    "updatedAt": "2019-04-15T15:10:56.040Z",
    "tagList": [
      "angular",
      "coffee",
    ],
    "author": {
      "id": "johnny",
      "username": "john",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQi0DmnSVnfwnZcfZzxypJuagh9A5qfgYsChRoxocXLjzOcXw",
    },
  },
]

export const COMMENTS = [
  {
    "id":"123",
    "comments":[
      {	"createdID": "6q5wf4e1gr",
        "createdAt": "2019-05-10T14:13:05.145Z",
        "updatedAt": "2019-05-10T14:13:05.145Z",
        "body": "123?",
        "author": {
          "id": "johnny",
          "username": "john",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQi0DmnSVnfwnZcfZzxypJuagh9A5qfgYsChRoxocXLjzOcXw",
        }
      },
      {	"createdID": "4e87w2x15q",
        "createdAt": "2019-05-10T14:13:05.145Z",
        "updatedAt": "2019-05-10T14:13:05.145Z",
        "body": "hello",
        "author": {
          "id": "johnny",
          "username": "john",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQi0DmnSVnfwnZcfZzxypJuagh9A5qfgYsChRoxocXLjzOcXw",
        }
      },
      {
        "createdID": "1d0905638b",
        "createdAt": "2019-05-10T14:13:05.145Z",
        "updatedAt": "2019-05-10T14:13:05.145Z",
        "body": "random text",
        "author": {
          "id": "galhhhoscar",
          "username": "duncan",
          "image": "https://app.visitluxembourg.com/images/24344-resize-1170x1170x70.jpg",
        }
      },
    ],
  },
  {
    "id":"118",
    "comments":[]
  },
  {
    "id":"4874418",
    "comments":[]
  },
  {
    "id":"95812",
    "comments":[]
  },
  {
    "id":"42121",
    "comments":[]
  },
  {
    "id":"988",
    "comments":[]
  },
  {
    "id":"4",
    "comments":[]
  },
  {
    "id":"21488",
    "comments":[]
  },
  {
    "id":"4888",
    "comments":[]
  },
  {
    "id":"1412",
    "comments":[]
  },
  {
    "id":"486",
    "comments":[]
  },
  {
    "id":"475",
    "comments":[]
  },
  {
    "id":"12321",
    "comments":[]
  },

  {
    "id":"4588",
    "comments":[
      {	"createdID": "ccceqws74r",
        "createdAt": "2019-05-10T14:13:05.145Z",
        "updatedAt": "2019-05-10T14:13:05.145Z",
        "body": "321?",
        "author": {
          "id": "johnny",
          "username": "john",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQi0DmnSVnfwnZcfZzxypJuagh9A5qfgYsChRoxocXLjzOcXw",
        }
      },
      {	"createdID": "1wwewqe1gr",
        "createdAt": "2019-05-10T14:13:05.145Z",
        "updatedAt": "2019-05-10T14:13:05.145Z",
        "body": "hello",
        "author": {
          "id": "johnny",
          "username": "john",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQi0DmnSVnfwnZcfZzxypJuagh9A5qfgYsChRoxocXLjzOcXw",
        }
      },
      {
        "createdID": "z1x2w44fwc",
        "createdAt": "2019-05-10T14:13:05.145Z",
        "updatedAt": "2019-05-10T14:13:05.145Z",
        "body": "random text",
        "author": {
          "id": "johnny",
          "username": "john",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQi0DmnSVnfwnZcfZzxypJuagh9A5qfgYsChRoxocXLjzOcXw",
        }
      },
    ],
  },
]
