import Controller from '@ember/controller';
// import Ember from '@ember/jquery';
import {computed} from '@ember/object';

export default Controller.extend({
  activityPlan: [...getActivityPlan()],
  yes: true,

  isMobile: computed('yes', function(){
    let x = window.screen.availWidth;
    // console.log(window.screen.availWidth);
    if(x > 760){
      return false
    }
    else{
      return true
    }
  })
});

function getActivityPlan() {
  return [{
      "_id": "5bed1d91a467157218f139d2",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Anim aute laboris culpa laborum cillum amet consectetur enim.",
        "projectName": "Project Team Building",
        "dueDate": "2014-12-02",
        "owner": "Nieves Hanson",
        "backlog": true,
        "scheduled": "2018-11-21",
        "scheduled_On": "2018-01-20",
        "status": "Pending"
      }
    },
    {
      "_id": "5bed1d912eacfa533b1ef0f3",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Reprehenderit ullamco magna nisi qui elit tempor ad.",
        "projectName": "Project Team Building",
        "dueDate": "2015-04-11",
        "owner": "Hodge Thompson",
        "backlog": false,
        "scheduled": "2018-11-21",
        "scheduled_On": "2018-11-23",
        "status": "Cancelled"
      }
    },
    {
      "_id": "5bed1d910806f8e7760785af",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Id incididunt mollit dolore sint mollit voluptate ea tempor anim duis ex ullamco.",
        "projectName": "Project AT&T",
        "dueDate": "2017-08-24",
        "owner": "Jackson Willis",
        "backlog": false,
        "scheduled": "2018-11-21",
        "scheduled_On": "2018-11-23",
        "status": "New"
      }
    },
    {
      "_id": "5bed1d91851450ba53f6fba1",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Irure laboris esse id eiusmod exercitation eu amet culpa qui aliquip sint in dolor.",
        "projectName": "Project AT&T",
        "dueDate": "2016-01-09",
        "owner": "Nash Blake",
        "backlog": false,
        "scheduled": "2018-11-23",
        "scheduled_On": "2018-11-21",
        "status": "Pending"
      }
    },
    {
      "_id": "5bed1d91db6ce3420c92e6dc",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Lorem sunt laboris magna reprehenderit voluptate fugiat incididunt aliquip aliquip pariatur.",
        "projectName": "Project AT&T",
        "dueDate": "2014-12-07",
        "owner": "Eve Mathis",
        "backlog": false,
        "scheduled": "2018-12-01",
        "scheduled_On": "2018-04-28",
        "status": "Completed"
      }
    },
    {
      "_id": "5bed1d91935a605462a0238f",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Consequat qui dolor nostrud sunt mollit officia adipisicing magna consequat dolor mollit excepteur.",
        "projectName": "Project Clean Bangalore",
        "dueDate": "2015-05-31",
        "owner": "Collier Benjamin",
        "backlog": true,
        "scheduled": "2018-12-03",
        "scheduled_On": "2018-01-08",
        "status": "Pending"
      }
    },
    {
      "_id": "5bed1d91c18ef2cdcffee16a",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Nisi amet cupidatat labore aliquip ullamco irure quis proident commodo tempor.",
        "projectName": "Project Team Building",
        "dueDate": "2016-09-13",
        "owner": "Dudley Young",
        "backlog": true,
        "scheduled": "2018-11-28",
        "scheduled_On": "2018-09-12",
        "status": "Completed"
      }
    },
    {
      "_id": "5bed1d915440cbd46d1772fc",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Id adipisicing nostrud minim enim minim laborum aliqua deserunt elit occaecat cupidatat aute ex.",
        "projectName": "Project Hibernate",
        "dueDate": "2014-06-29",
        "owner": "Jean Ayers",
        "backlog": false,
        "scheduled": "2018-11-29",
        "scheduled_On": "2018-01-19",
        "status": "Completed"
      }
    },
    {
      "_id": "5bed1d912850b18834564c60",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Reprehenderit velit adipisicing eu ea esse enim pariatur do Lorem labore et veniam.",
        "projectName": "Project Clean Bangalore",
        "dueDate": "2018-08-12",
        "owner": "Whitney Mejia",
        "backlog": false,
        "scheduled": "2018-12-14",
        "scheduled_On": "2018-04-10",
        "status": "Cancelled"
      }
    },
    {
      "_id": "5bed1d910e9afda27993e46e",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Nostrud ut laborum occaecat adipisicing incididunt qui incididunt Lorem pariatur eiusmod id consequat minim adipisicing.",
        "projectName": "Project Team Building",
        "dueDate": "2017-08-11",
        "owner": "Lessie Perry",
        "backlog": false,
        "scheduled": "2018-11-29",
        "scheduled_On": "2018-02-27",
        "status": "New"
      }
    },
    {
      "_id": "5bed1d9183ef53816c03b4b5",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Elit eiusmod adipisicing commodo esse ex tempor laborum duis veniam ea ut excepteur ea voluptate.",
        "projectName": "Project CGI",
        "dueDate": "2015-02-04",
        "owner": "Joan Robinson",
        "backlog": false,
        "scheduled": "2018-11-26",
        "scheduled_On": "2018-05-30",
        "status": "Cancelled"
      }
    },
    {
      "_id": "5bed1d91e3efddd6ec4e271e",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Proident et eiusmod fugiat sint voluptate aute in minim in.",
        "projectName": "Project AT&T",
        "dueDate": "2016-03-29",
        "owner": "Priscilla Vincent",
        "backlog": true,
        "scheduled": "2018-12-13",
        "scheduled_On": "2018-04-18",
        "status": "Pending"
      }
    },
    {
      "_id": "5bed1d91e8593804b44e6248",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Quis enim consequat laborum enim Lorem aute laborum cillum ipsum dolor adipisicing nulla.",
        "projectName": "Project Clean Bangalore",
        "dueDate": "2018-02-01",
        "owner": "Townsend Watkins",
        "backlog": false,
        "scheduled": "2018-11-25",
        "scheduled_On": "2018-04-14",
        "status": "Completed"
      }
    },
    {
      "_id": "5bed1d917ac35de1ca1709d6",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Quis cupidatat enim nulla sit irure laborum cupidatat.",
        "projectName": "Project Clean Bangalore",
        "dueDate": "2018-01-01",
        "owner": "Sweeney Mckay",
        "backlog": true,
        "scheduled": "2018-12-04",
        "scheduled_On": "2018-04-28",
        "status": "Pending"
      }
    },
    {
      "_id": "5bed1d915f976df447d4ebd5",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Aute Lorem dolore ullamco eiusmod.",
        "projectName": "Project CGI",
        "dueDate": "2015-01-11",
        "owner": "Claudine Gibson",
        "backlog": true,
        "scheduled": "2018-11-30",
        "scheduled_On": "2018-11-05",
        "status": "Cancelled"
      }
    },
    {
      "_id": "5bed1d91739bfd0583d0383a",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Non est labore id adipisicing ipsum mollit ut deserunt.",
        "projectName": "Project Sleep",
        "dueDate": "2015-06-21",
        "owner": "Sherry Burton",
        "backlog": true,
        "scheduled": "2018-11-23",
        "scheduled_On": "2018-01-10",
        "status": "New"
      }
    },
    {
      "_id": "5bed1d91ed18d02acc3af26c",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Veniam amet sunt enim sint occaecat proident irure tempor ad nostrud tempor occaecat consectetur eiusmod.",
        "projectName": "Project Hibernate",
        "dueDate": "2017-11-25",
        "owner": "Chrystal Green",
        "backlog": false,
        "scheduled": "2018-11-15",
        "scheduled_On": "2018-02-01",
        "status": "Completed"
      }
    },
    {
      "_id": "5bed1d917d3881b0ed668755",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Mollit id eiusmod consequat excepteur qui incididunt sint aliquip.",
        "projectName": "Project Clean Bangalore",
        "dueDate": "2015-08-15",
        "owner": "Millicent Callahan",
        "backlog": false,
        "scheduled": "2018-11-23",
        "scheduled_On": "2018-03-06",
        "status": "Cancelled"
      }
    },
    {
      "_id": "5bed1d9167256df1f87c40f8",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Ex labore dolore consequat do tempor amet minim id ex enim nulla.",
        "projectName": "Project Stackroute",
        "dueDate": "2014-11-19",
        "owner": "Lila Bridges",
        "backlog": false,
        "scheduled": "2018-11-22",
        "scheduled_On": "2018-05-05",
        "status": "Completed"
      }
    },
    {
      "_id": "5bed1d91fde9ecb35501df15",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Do et enim nostrud aliqua magna eiusmod deserunt cillum tempor exercitation duis sint ea.",
        "projectName": "Project Sleep",
        "dueDate": "2017-04-02",
        "owner": "Jeannette Nash",
        "backlog": false,
        "scheduled": "2018-11-15",
        "scheduled_On": "2018-08-26",
        "status": "Cancelled"
      }
    },
    {
      "_id": "5bed1d915fc32ba675ef89f0",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Eiusmod elit magna culpa ipsum.",
        "projectName": "Project Team Building",
        "dueDate": "2016-10-23",
        "owner": "Patrice Rowland",
        "backlog": true,
        "scheduled": "2018-11-15",
        "scheduled_On": "2018-05-03",
        "status": "Pending"
      }
    },
    {
      "_id": "5bed1d91d0c927c2c9f5241c",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Cupidatat consequat anim cupidatat dolore culpa ex reprehenderit.",
        "projectName": "Project CGI",
        "dueDate": "2018-02-03",
        "owner": "Powers Park",
        "backlog": false,
        "scheduled": "2018-11-15",
        "scheduled_On": "2018-11-17",
        "status": "Completed"
      }
    },
    {
      "_id": "5bed1d91fac8fd3932cb62fd",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Dolor minim est eu in.",
        "projectName": "Project CGI",
        "dueDate": "2015-01-31",
        "owner": "Maynard Wong",
        "backlog": true,
        "scheduled": "2018-12-15",
        "scheduled_On": "2018-11-17",
        "status": "Cancelled"
      }
    },
    {
      "_id": "5bed1d9197f588d7fd8b6f0b",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Proident reprehenderit fugiat non commodo ipsum non cillum tempor reprehenderit ut minim.",
        "projectName": "Project Stackroute",
        "dueDate": "2017-07-14",
        "owner": "Nell Gregory",
        "backlog": true,
        "scheduled": "2018-11-17",
        "scheduled_On": "2018-02-08",
        "status": "Pending"
      }
    },
    {
      "_id": "5bed1d9179ef4229cb0e24cc",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Dolor quis cillum exercitation sunt laborum amet excepteur et exercitation pariatur nisi aliquip.",
        "projectName": "Project Team Building",
        "dueDate": "2014-07-06",
        "owner": "Helen Ramirez",
        "backlog": false,
        "scheduled": "2018-11-15",
        "scheduled_On": "2018-08-14",
        "status": "Cancelled"
      }
    },
    {
      "_id": "5bed1d9105f4df5e40a8fb6c",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Elit aliqua culpa dolore Lorem qui sunt.",
        "projectName": "Project CGI",
        "dueDate": "2014-03-17",
        "owner": "Meagan Mendoza",
        "backlog": false,
        "scheduled": "2018-11-17",
        "scheduled_On": "2018-08-11",
        "status": "Pending"
      }
    },
    {
      "_id": "5bed1d91ffc31a145df3c5ca",
      "date": "date(new Date(), new Date(2018, 12, 12))",
      "tasks": {
        "text": "Minim sunt quis ea voluptate Lorem anim est.",
        "projectName": "Project Clean Bangalore",
        "dueDate": "2015-03-29",
        "owner": "Susan Osborn",
        "backlog": false,
        "scheduled": "2018-11-17",
        "scheduled_On": "2018-07-08",
        "status": "Completed"
      }
    }
  ]
}
