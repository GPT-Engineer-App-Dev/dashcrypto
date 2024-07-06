import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Transactions = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Transactions</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Asset</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Add sample data here */}
              <TableRow>
                <TableCell>2023-05-01</TableCell>
                <TableCell>Buy</TableCell>
                <TableCell>Bitcoin</TableCell>
                <TableCell>0.1 BTC</TableCell>
                <TableCell>$45,000</TableCell>
                <TableCell>$4,500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-04-28</TableCell>
                <TableCell>Sell</TableCell>
                <TableCell>Ethereum</TableCell>
                <TableCell>2 ETH</TableCell>
                <TableCell>$2,800</TableCell>
                <TableCell>$5,600</TableCell>
              </TableRow>
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;