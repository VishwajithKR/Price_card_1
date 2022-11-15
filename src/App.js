import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {

  let reo = [
    {
      plan: "FREE",
      price: "0",
      currency: "$",
      period: "month",
      futures:[
        {
          name:"Single User",
          enable:true,
          mention:true
        },
        {
          name:"10Gb",
          enable:true
        },
        {
          name:"Unlimited Public Projects",
          enable:true
        },
        {
          name:"Community Access",
          enable:true
        },
        {
          name:"Unlimited Private Projects",
          enable:false
        },
        {
          name:"Dedicated Phone Support",
          enable:false
        },
        {
          name:"Free Subdomain",
          enable:false
        },
        {
          name:"Monthly Status Reports",
          enable:false
        },
        {
          name:"Waste Feedback",
          enable:false
        },
      ]


    },
     {
      plan: "PRO",
      price: "199",
      currency: "$",
     
      period: "6 month",
      futures:[
        {
          name:"5 User",
          enable:true,
          mention:true
        },
        {
          name:"75Gb",
          enable:true
        },
        {
          name:"Unlimited Public Projects",
          enable:true
        },
        {
          name:"Community Access",
          enable:true
        },
        {
          name:"Unlimited Private Projects",
          enable:true
        },
        {
          name:"Dedicated Phone Support",
          enable:true
        },
        {
          name:"Free Subdomain",
          enable:true
        },
        {
          name:"Monthly Status Reports",
          enable:false
        },
        {
          name:"Waste Feedback",
          enable:false
        },
      ]
    },
     {
      plan: "ULTRA",
      price: "499",
      currency: "$",
      period: "1 Year",
      futures:[
        {
          name:"Unlimited User",
          enable:true,
          mention:true
        },
        {
          name:"150Gb",
          enable:true
        },
        {
          name:"Unlimited Public Projects",
          enable:true
        },
        {
          name:"Community Access",
          enable:true
        },
        {
          name:"Unlimited Private Projects",
          enable:true
        },
        {
          name:"Dedicated Phone Support",
          enable:true
        },
        {
          name:" Unlimited Free Subdomain",
          enable:true
        },
        {
          name:"Monthly Status Reports",
          enable:true
        },
        {
          name:"Waste Feedback",
          enable:true
        },
      ]
    },
  ];

  return (<section class="pricing py-5">
    <div class="container">
      <div class="row">
       {
        reo.map(obj=><Card data={obj}></Card>)
       }
      </div>
    </div>
  </section>
  );
}


export default App;
