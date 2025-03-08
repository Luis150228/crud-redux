import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button";
import { Eraser, Pencil, UserRoundCheck, UserRoundPlus } from "lucide-react";
import { useAppSelector } from "@/hooks/useStore";

export function TableDemo() {
    const cuentas = useAppSelector((state) => state.users);
    console.log(cuentas);
  return (
    <Card>
        <CardHeader>
            <CardTitle>Users Admin</CardTitle>
            <Badge color="success">{cuentas.length}</Badge>
        </CardHeader>
        <CardContent>
            <Table>
            <TableCaption>User Administration Base</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>User</TableHead>
                <TableHead className="text-right">Is Follow</TableHead>
                <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {cuentas.map((usr) => (
                <TableRow key={usr.id}>
                    <TableCell className="font-medium">{usr.id}</TableCell>
                    <TableCell className="format-cell">
                        <img
                            src={`https://unavatar.io/youtube/${usr.username}`}
                            alt={`@${usr.username}`}
                            className="avatar-img"
                        />
                        {usr.name}
                    </TableCell>
                    <TableCell>{usr.username}</TableCell>
                    <TableCell className="text-center">{usr.isFollow ? <UserRoundCheck />: <UserRoundPlus />}</TableCell>
                    <TableCell className="format-cell">
                        <Button type="button" color="primary">
                            <Pencil />
                        </Button>
                        <Button type="button" color="danger">
                            <Eraser />
                        </Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </CardContent>
    </Card>
  )
}
