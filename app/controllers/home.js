import Controller from '@ember/controller';

export default Controller.extend({
    activityPlan: [...getActivityPlan()]
});
function getActivityPlan() {
    return [
        {
          "_id": "5becf92929c470546584ce39",
          "date": "date(new Date(), new Date(2018, 12, 12))",
          "tasks": {
            "text": "Pariatur culpa consectetur ad in deserunt amet.",
            "projectName": "Project Team Building",
            "dueDate": "date(new Date(), new Date(2018, 12, 12))",
            "owner": "Aguilar Joseph",
            "backlog": true,
            "scheduled": "date(new Date(), new Date(2018, 12, 12))",
            "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
            "status": "Pending"
          }
        },
        {
          "_id": "5becf929352aff4bf95b95be",
          "date": "date(new Date(), new Date(2018, 12, 12))",
          "tasks": {
            "text": "Aliqua occaecat consectetur ex veniam exercitation esse consectetur.",
            "projectName": "Project Team Building",
            "dueDate": "date(new Date(), new Date(2018, 12, 12))",
            "owner": "Fitzgerald Hickman",
            "backlog": false,
            "scheduled": "date(new Date(), new Date(2018, 12, 12))",
            "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
            "status": "Pending"
          }
        },
        {
          "_id": "5becf929d2590cb93e7fb358",
          "date": "date(new Date(), new Date(2018, 12, 12))",
          "tasks": {
            "text": "Ea consequat sit excepteur nulla et excepteur laborum nisi ut ut.",
            "projectName": "Project CGI",
            "dueDate": "date(new Date(), new Date(2018, 12, 12))",
            "owner": "Mitchell Woodward",
            "backlog": true,
            "scheduled": "date(new Date(), new Date(2018, 12, 12))",
            "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
            "status": "Pending"
          }
        },
        {
          "_id": "5becf92932b13b2212281817",
          "date": "date(new Date(), new Date(2018, 12, 12))",
          "tasks": {
            "text": "Lorem aliqua dolor non reprehenderit nostrud laborum eu ex sit eiusmod sint.",
            "projectName": "Project CGI",
            "dueDate": "date(new Date(), new Date(2018, 12, 12))",
            "owner": "Trisha Sampson",
            "backlog": true,
            "scheduled": "date(new Date(), new Date(2018, 12, 12))",
            "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
            "status": "Pending"
          }
        },
        {
          "_id": "5becf92973c83410b0e02208",
          "date": "date(new Date(), new Date(2018, 12, 12))",
          "tasks": {
            "text": "Dolor magna duis exercitation minim sit aliqua sint pariatur adipisicing consectetur minim velit nulla.",
            "projectName": "Project Hibernate",
            "dueDate": "date(new Date(), new Date(2018, 12, 12))",
            "owner": "Rosetta Long",
            "backlog": false,
            "scheduled": "date(new Date(), new Date(2018, 12, 12))",
            "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
            "status": "Pending"
          }
        },
        {
          "_id": "5becf9293cc6b1c973c78e89",
          "date": "date(new Date(), new Date(2018, 12, 12))",
          "tasks": {
            "text": "Laboris esse id sunt dolor quis elit nulla.",
            "projectName": "Project Stackroute",
            "dueDate": "date(new Date(), new Date(2018, 12, 12))",
            "owner": "Dianne Stewart",
            "backlog": false,
            "scheduled": "date(new Date(), new Date(2018, 12, 12))",
            "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
            "status": "New"
          }
        },
        {
          "_id": "5becf929cc891c666bef22b1",
          "date": "date(new Date(), new Date(2018, 12, 12))",
          "tasks": {
            "text": "Quis ullamco eu ad consectetur incididunt minim occaecat est ad qui ipsum eiusmod.",
            "projectName": "Project AT&T",
            "dueDate": "date(new Date(), new Date(2018, 12, 12))",
            "owner": "Chambers Mcintosh",
            "backlog": true,
            "scheduled": "date(new Date(), new Date(2018, 12, 12))",
            "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
            "status": "New"
          }
        },
        {
          "_id": "5becf929f100676a556408a3",
          "date": "date(new Date(), new Date(2018, 12, 12))",
          "tasks": {
            "text": "Fugiat enim nulla excepteur nisi quis consectetur minim.",
            "projectName": "Project Stackroute",
            "dueDate": "date(new Date(), new Date(2018, 12, 12))",
            "owner": "Mcfarland Alvarado",
            "backlog": true,
            "scheduled": "date(new Date(), new Date(2018, 12, 12))",
            "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
            "status": "Cancelled"
          }
        },
        {
          "_id": "5becf929da5baefb93d6e315",
          "date": "date(new Date(), new Date(2018, 12, 12))",
          "tasks": {
            "text": "Est dolore excepteur sunt commodo commodo ex in.",
            "projectName": "Project Stackroute",
            "dueDate": "date(new Date(), new Date(2018, 12, 12))",
            "owner": "Grace Lyons",
            "backlog": false,
            "scheduled": "date(new Date(), new Date(2018, 12, 12))",
            "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
            "status": "New"
          }
        },
        {
          "_id": "5becf9291023278a2c78274d",
          "date": "date(new Date(), new Date(2018, 12, 12))",
          "tasks": {
            "text": "Adipisicing veniam dolor mollit ad exercitation velit voluptate.",
            "projectName": "Project Hibernate",
            "dueDate": "date(new Date(), new Date(2018, 12, 12))",
            "owner": "Amanda Carson",
            "backlog": false,
            "scheduled": "date(new Date(), new Date(2018, 12, 12))",
            "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
            "status": "New"
          }
        }
      ]
}
