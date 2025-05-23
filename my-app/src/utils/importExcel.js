const XLSX = require('xlsx');
const mysql = require('mysql2/promise');

(async () => {
  const workbook = XLSX.readFile('./employees.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet);

  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'admin',
    password: 'yourpassword',
    database: 'providerpal',
  });

  for (const row of rows) {
    const {
      ID,
      'First Name': firstName,
      'Last Name': lastName,
      'Date of birth': dob,
      'Login Name': loginName,
      'Mobile #': mobile,
      Address: address,
      Aggregator: aggregator,
      OIG: oig,
    } = row;

    await connection.execute(
      `INSERT INTO employees (id, firstName, lastName, dob, loginName, mobile, address, aggregator, oig)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        ID,
        firstName,
        lastName,
        new Date(dob),
        loginName,
        mobile,
        address,
        aggregator || '',
        oig || '',
      ]
    );
  }

  console.log('Excel data imported to MySQL successfully.');
  await connection.end();
})();
