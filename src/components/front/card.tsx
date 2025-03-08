import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { TableDemo } from "./userTable"

export const CardTable = ({title, descriprion, footer}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{descriprion}</CardDescription>
            </CardHeader>
            <CardContent>
                <TableDemo/>
            </CardContent>
            <CardFooter>
                <p>{footer}</p>
            </CardFooter>
        </Card>

    )
}