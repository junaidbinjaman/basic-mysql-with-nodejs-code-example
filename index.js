var mysql = require("mysql");

var DatabaseConnectionConfig = {
  host: "localhost",
  user: "ecomkoox_jwolt",
  password: "{ZTQmxQ#IZH4",
  database: "school",
};

var connection = mysql.createConnection(DatabaseConnectionConfig);

connection.connect(function (err) {
  if (err) {
    res.end("Connection Failed");
  } else {
    resizeBy.end("Connection Success");
    // InsertData(connection)
    // UpdateData(connection);
    UpdateData(connection)
  }
});

var SQLQuery =
  "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Rabbil' , '03', 'Ten', '017098374', 'Dhaka')";

function InsertData(connection) {
  connection.query(SQLQuery, function (err) {
    if (err) {
      console.log("Data insert failed");
    } else {
      console.log("Data insert success");
    }
  });
}

function DeleteDataById(connection) {
  var SQLQuery = "DELETE FROM `students_list` WHERE `id` = '2' ";
  connection.query(SQLQuery, function (err) {
    if (err) {
      console.log("Data delete failed");
    } else {
      console.log("Data delete success");
    }
  });
}

function UpdateData(connection) {
  var SQLQuery =
    "UPDATE `students_list` SET `phone`='11111111111',`city`='Mymenshing' WHERE `id` = '3'";
  connection.query(SQLQuery, function (err) {
    if (err) {
      console.log("Data update failed");
    } else {
      console.log("Data update success");
    }
  });
}

function SelectData(connection) {
  var SQLQuery = "SELECT * FROM `students_list`"
  connection.query(SQLQuery, function (err, result) {
    if (err) {
      result.end("Data select failed");
    } else {
      result.end(result);
    }
  });
}
