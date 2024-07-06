import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Portfolio = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Holdings Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium">Total Value</p>
              <p className="text-2xl font-bold">$25,468.32</p>
            </div>
            <div>
              <p className="text-sm font-medium">24h Change</p>
              <p className="text-2xl font-bold text-green-600">+$1,234.56 (4.8%)</p>
            </div>
            <div>
              <p className="text-sm font-medium">Total Profit/Loss</p>
              <p className="text-2xl font-bold text-green-600">+$3,456.78 (15.7%)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Holdings List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>24h Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Add sample data here */}
              <TableRow>
                <TableCell>Bitcoin</TableCell>
                <TableCell>0.5 BTC</TableCell>
                <TableCell>$45,000</TableCell>
                <TableCell>$22,500</TableCell>
                <TableCell className="text-green-600">+2.5%</TableCell>
              </TableRow>
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;