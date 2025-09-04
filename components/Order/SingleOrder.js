import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const SingleOrder = ({order}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex flex-row justify-between items-top gap-3 bg-secondary">
            <div>
              <div className="w-[12ch] font-semibold">Order Placed</div>
              <div>{order?.order_date}</div>
            </div>
            <div>
              <div className="font-semibold">Total</div>
              <div>{order?.net_amount}</div>
            </div>
            <div>
              <div className="font-semibold">Ship To</div>
              <div>{order?.delivery_address}</div>
            </div>
            <div>
              <div className="w-[15ch]"><span className="font-semibold">Order#</span> {order?.order_id}</div>
              <div></div>
            </div>
          </div>
        </CardHeader>
        <CardContent>

        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default SingleOrder;
