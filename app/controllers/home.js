import Controller from '@ember/controller';

export default Controller.extend({
    activityPlan: [...getActivityPlan()]
});
function getActivityPlan() {
    return [
      {
        "_id": "5bed0b61455febd984b6a2c3",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Labore ullamco incididunt reprehenderit ex Lorem.",
          "projectName": "Project CGI",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Skinner Luna",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Cancelled"
        }
      },
      {
        "_id": "5bed0b617fa2328843507579",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Aliqua mollit est mollit sit cillum id pariatur deserunt nostrud adipisicing commodo adipisicing sint sint.",
          "projectName": "Project Hibernate",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Rosa Lara",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Completed"
        }
      },
      {
        "_id": "5bed0b61f6609717859a6e37",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Magna nulla ad exercitation ea exercitation enim minim nisi eu labore Lorem proident minim occaecat.",
          "projectName": "Project CGI",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "English Bush",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Pending"
        }
      },
      {
        "_id": "5bed0b615b160977e90027bf",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Ex ea velit consequat anim tempor fugiat dolor veniam qui est.",
          "projectName": "Project Sleep",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Lela Mcgee",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Pending"
        }
      },
      {
        "_id": "5bed0b61bcae17350886099c",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Minim tempor ea nostrud nisi qui eu ut mollit occaecat ut.",
          "projectName": "Project CGI",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Campbell Swanson",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Cancelled"
        }
      },
      {
        "_id": "5bed0b61dc8448e4ae839f56",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Ullamco velit cupidatat irure ut cupidatat mollit irure mollit elit qui reprehenderit consectetur.",
          "projectName": "Project Hibernate",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Johnson Rich",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Cancelled"
        }
      },
      {
        "_id": "5bed0b6186dc9a9bb04e14b5",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Aliqua excepteur ut culpa ea.",
          "projectName": "Project CGI",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Adams Williamson",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Completed"
        }
      },
      {
        "_id": "5bed0b612f2b41f231687e3f",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Id nostrud cupidatat duis elit Lorem ex irure irure incididunt.",
          "projectName": "Project AT&T",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Welch Larson",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Cancelled"
        }
      },
      {
        "_id": "5bed0b61fd2d89d741808bd0",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Excepteur dolore sunt minim nostrud deserunt proident dolore veniam ea laborum laboris et et tempor.",
          "projectName": "Project Hibernate",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Mcclain Peters",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Cancelled"
        }
      },
      {
        "_id": "5bed0b61016968304dda37dc",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Irure cillum sunt Lorem consequat fugiat cupidatat.",
          "projectName": "Project Stackroute",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Carmen Silva",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "New"
        }
      },
      {
        "_id": "5bed0b61b20425564037da0d",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Dolor qui dolore voluptate nostrud labore voluptate laboris excepteur sunt officia.",
          "projectName": "Project Clean Bangalore",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Floyd Stein",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Completed"
        }
      },
      {
        "_id": "5bed0b61e0ddc75c8d4d519c",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Et reprehenderit officia eu duis in nulla quis.",
          "projectName": "Project AT&T",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Marguerite Strong",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Pending"
        }
      },
      {
        "_id": "5bed0b61fce4e81555d37a9d",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Cupidatat quis irure aliquip deserunt eiusmod do.",
          "projectName": "Project Team Building",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Graham Bright",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Cancelled"
        }
      },
      {
        "_id": "5bed0b616f569f51b4f61db2",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Esse proident esse ipsum proident id magna cillum veniam veniam deserunt fugiat mollit adipisicing.",
          "projectName": "Project Clean Bangalore",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Vaughn Best",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Pending"
        }
      },
      {
        "_id": "5bed0b61026c6c53abfa9cc1",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Incididunt voluptate nostrud sunt Lorem eiusmod tempor.",
          "projectName": "Project Team Building",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Brandie Hopkins",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "New"
        }
      },
      {
        "_id": "5bed0b6195940ef06ece2014",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Aliquip ex adipisicing ad magna officia eu reprehenderit elit labore.",
          "projectName": "Project AT&T",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Elaine Davidson",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Cancelled"
        }
      },
      {
        "_id": "5bed0b61247a02d19a71dfff",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Anim occaecat aliqua excepteur culpa sunt minim enim duis nulla qui aute dolor ut.",
          "projectName": "Project CGI",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Alvarado Nixon",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Completed"
        }
      },
      {
        "_id": "5bed0b6138a36ccfa349601f",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Quis sit dolor aliqua minim laboris non occaecat aliquip.",
          "projectName": "Project Hibernate",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Clements Herman",
          "backlog": false,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Cancelled"
        }
      },
      {
        "_id": "5bed0b61ade329c8d006cf45",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Magna adipisicing occaecat laborum Lorem culpa non cupidatat aute incididunt cillum tempor adipisicing adipisicing.",
          "projectName": "Project Sleep",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Robinson Hernandez",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Completed"
        }
      },
      {
        "_id": "5bed0b610f1bce09688ab953",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Consequat enim non cupidatat dolor non mollit nostrud elit ex.",
          "projectName": "Project AT&T",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Nikki Francis",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "New"
        }
      },
      {
        "_id": "5bed0b61d5ee6bcf07d5c2dd",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Pariatur cillum labore culpa nisi culpa minim velit elit elit consectetur eiusmod commodo et sint.",
          "projectName": "Project Clean Bangalore",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Sherman Johnson",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "New"
        }
      },
      {
        "_id": "5bed0b61cf3ca08307b54ec1",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Et pariatur Lorem mollit commodo reprehenderit.",
          "projectName": "Project Stackroute",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Best Britt",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Pending"
        }
      },
      {
        "_id": "5bed0b6140c8d32afc45421c",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Ad eu laboris sit mollit esse veniam Lorem aliqua eiusmod deserunt sit duis tempor.",
          "projectName": "Project Sleep",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Higgins Macias",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Completed"
        }
      },
      {
        "_id": "5bed0b613541475bad4d6109",
        "date": "date(new Date(), new Date(2018, 12, 12))",
        "tasks": {
          "text": "Consectetur Lorem mollit exercitation eu deserunt deserunt ex est enim id laborum est consectetur amet.",
          "projectName": "Project Hibernate",
          "dueDate": "date(new Date(), new Date(2018, 12, 12))",
          "owner": "Valerie Owen",
          "backlog": true,
          "scheduled": "date(new Date(), new Date(2018, 12, 12))",
          "scheduled_On": "date(new Date(), new Date(2018, 12, 12))",
          "status": "Pending"
        }
      }
    ]
  }    
