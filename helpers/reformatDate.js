function reformatDate(fullDate) {
  const date = new Date(fullDate);

  let tahun = date.getFullYear();
  let bulan = date.getMonth();
  let tanggal = date.getDate();

  switch (bulan) {
    case 0:
      bulan = "Jan";
      break;
    case 1:
      bulan = "Feb";
      break;
    case 2:
      bulan = "Mar";
      break;
    case 3:
      bulan = "Apr";
      break;
    case 4:
      bulan = "Mei";
      break;
    case 5:
      bulan = "Jun";
      break;
    case 6:
      bulan = "Jul";
      break;
    case 7:
      bulan = "Agt";
      break;
    case 8:
      bulan = "Sept";
      break;
    case 9:
      bulan = "Okt";
      break;
    case 10:
      bulan = "Nov";
      break;
    case 11:
      bulan = "Des";
      break;
  }

  const date_indo = tanggal + " " + bulan + " " + tahun;

  return date_indo;
}

export default reformatDate;
