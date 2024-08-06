// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import classNames from 'classnames';

// const createData = (name, trackingId, date, status) => {
//   return { name, trackingId, date, status };
// };

// const rows = [
//   createData('瑞莱的冰晶节杖', 18908424, '2023-03-02', '已签收'),
//   createData('梅贾的窃魂卷', 18908424, '2023-03-02', '退货中'),
//   createData('斯特拉克的挑战护手', 18908424, '2023-03-02', '已签收'),
//   createData('炽热香炉', 18908421, '2023-03-02', '已发货'),
// ];

// const makeStyle = (status) => {
//   if (status === '已签收') {
//     return 'bg-green-200 text-green-700';
//   } else if (status === '退货中') {
//     return 'bg-red-200 text-red-700';
//   } else {
//     return 'bg-blue-500 text-white';
//   }
// };

// export default function BasicTable() {
//   return (
//     <div className="Table container mx-auto mt-8 px-4 py-2">
//       <h3 className="text-2xl font-semibold mb-4">下单情况</h3>
//       <TableContainer
//         component={Paper}
//         className="shadow-lg rounded-lg overflow-hidden"
//       >
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow className="font-bold">
//               <TableCell className="p-2">商品</TableCell>
//               <TableCell align="left" className="p-2">
//                 ID
//               </TableCell>
//               <TableCell align="left" className="p-2">
//                 日期
//               </TableCell>
//               <TableCell align="left" className="p-2">
//                 状态
//               </TableCell>
//               <TableCell align="left" className="p-2"></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody className="text-white">
//             {rows.map((row) => (
//               <TableRow key={row.name} className="border-b">
//                 <TableCell component="th" scope="row" className="p-2">
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="left" className="p-2">
//                   {row.trackingId}
//                 </TableCell>
//                 <TableCell align="left" className="p-2">
//                   {row.date}
//                 </TableCell>
//                 <TableCell align="left" className="p-2">
//                   <span
//                     className={classNames(
//                       'status p-2 rounded-lg',
//                       makeStyle(row.status)
//                     )}
//                   >
//                     {row.status}
//                   </span>
//                 </TableCell>
//                 <TableCell
//                   align="left"
//                   className="p-2 text-blue-700 cursor-pointer"
//                 >
//                   详细信息
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }
