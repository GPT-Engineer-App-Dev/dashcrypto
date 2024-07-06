import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Cryptocurrency Market</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MarketCard title="Market Cap" value="$2.34T" change="+1.2%" />
        <MarketCard title="24h Volume" value="$78.9B" change="-3.4%" />
        <MarketCard title="BTC Dominance" value="42.7%" change="+0.5%" />
        <MarketCard title="ETH Dominance" value="18.3%" change="-0.2%" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Cryptocurrencies</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Market Cap</TableHead>
                <TableHead>24h Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <CryptoTableRow rank="1" name="Bitcoin" symbol="BTC" price="$45,000" marketCap="$850B" change="+2.5%" />
              <CryptoTableRow rank="2" name="Ethereum" symbol="ETH" price="$3,200" marketCap="$380B" change="-1.2%" />
              <CryptoTableRow rank="3" name="Binance Coin" symbol="BNB" price="$420" marketCap="$65B" change="+0.8%" />
              <CryptoTableRow rank="4" name="Cardano" symbol="ADA" price="$1.20" marketCap="$38B" change="+3.7%" />
              <CryptoTableRow rank="5" name="Solana" symbol="SOL" price="$150" marketCap="$45B" change="-2.1%" />
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Latest News</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <NewsItem title="Bitcoin reaches new all-time high" date="2 hours ago" />
            <NewsItem title="Ethereum 2.0 upgrade scheduled for next month" date="5 hours ago" />
            <NewsItem title="New regulations proposed for cryptocurrency exchanges" date="1 day ago" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const MarketCard = ({ title, value, change }) => {
  const isPositive = change.startsWith('+');
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Badge variant={isPositive ? "success" : "destructive"} className="text-xs">
          {change}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

const CryptoTableRow = ({ rank, name, symbol, price, marketCap, change }) => {
  const isPositive = change.startsWith('+');
  return (
    <TableRow>
      <TableCell>{rank}</TableCell>
      <TableCell>
        <div className="font-medium">{name}</div>
        <div className="text-sm text-muted-foreground">{symbol}</div>
      </TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{marketCap}</TableCell>
      <TableCell>
        <span className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUpIcon className="w-4 h-4 mr-1" /> : <ArrowDownIcon className="w-4 h-4 mr-1" />}
          {change}
        </span>
      </TableCell>
    </TableRow>
  );
};

const NewsItem = ({ title, date }) => (
  <div className="border-b pb-2">
    <h3 className="font-medium">{title}</h3>
    <p className="text-sm text-muted-foreground">{date}</p>
  </div>
);

export default Dashboard;