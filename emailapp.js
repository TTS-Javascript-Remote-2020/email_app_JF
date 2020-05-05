// https://repl.it/@juliefield/emailAppHomework

var appData = {
  name: 'Gmail',
  mailboxes: [
    { Inbox: {
        unRead: '12',
        read: '2000'
      },
      Drafts: {
        emails: [
          { subject: 'Draft email',
            date: 'May 5, 2020',
            message: 'This is a draft email',
            status: 'Draft'
          }
        ]
      },
      Pins: '3',
      Sent: '105',
      Trash: '15'
    }
  ],
  contacts: [
    {
      name: 'Shane',
      emailAddress: 'shane@gmail.com',
      lastMessage: [
        { subject: 'Class today',
          date: 'April 30, 2020',
          message: 'I wont be in class today.'
        }
      ]
    },
    {
      name: 'Katy',
      emailAddress: 'Katy@gmail.com',
      lastMessage: [
        { subject: 'Hello',
          date: 'April 29, 2020',
          message: 'Hope all is well.'
        }
      ]
    }
  ],
  emails: [
    { subject: 'Class today',
      date: 'April 30, 2020',
      message: 'I wont be in class today.',
      status: 'Draft'
    },
    { subject: 'Hello',
      date: 'April 29, 2020',
      message: 'Hope all is well.',
      status: 'Draft'
    }
  ]
};

console.log(appData);

console.log("\n----------------------------------------------------\n");
console.log("HOMEWORK\n");

//getting mailbox names
//console.log("Mailbox Names:" , appData.mailboxes[0].join(' , '));
console.log("List of Mailboxes:" , appData.mailboxes);

//question: How do I get just the Inbox name without the Object arrays under it?
console.log("\n----------------------------------------------------\n");

//Get list of Emails
console.log("List of Emails:" , appData.contacts[0].emailAddress);
console.log("\n----------------------------------------------------\n");

//Get the text of the second email in the visible list
console.log("Get the text of the second email:" , appData.emails[1]);

console.log("\n----------------------------------------------------\n");
//Mark an email as sent
appData.emails[1].status = 'Sent';
console.log("Mark an email as sent:" , appData.emails);

console.log("\n----------------------------------------------------\n");
//Add a draft email to the drafts mailbox
appData.mailboxes[0].Drafts.emails.push(
  { subject: 'Draft email 2',
    date: 'May 4, 2020',
    message: 'This is another draft email',
    status: 'Draft copy goes here'
  }
);

console.log("Add Draft Email:" , appData.mailboxes[0].Drafts.emails[1]);
