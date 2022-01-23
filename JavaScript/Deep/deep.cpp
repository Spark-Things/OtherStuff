#include <iostream>

using namespace std;

void calculation_in_inch(float length,float width)
{
    float l;
    float w = (width + 15) / 39;
   // cout<<"width(meter)  - "<<w<<endl;

   if(length == 0)
         cout<<"Nothing Required";
   else
   {
       l = w*(length/20);
   }

  cout<<"Curtain(in metere) - "<<l<<endl;

}

void calculation_in_feet(float length,float width)
{
    float l;
    float w = (width + 1.25) / 3.25;
   // cout<<"width(meter)  - "<<w<<endl;

   if(length == 0)
         cout<<"Nothing Required";
   else
   {
       l = w*(length/(1.67));
   }

  cout<<"Curtain(in metere) - "<<l<<endl;

}


int main()
{
    float length;
    float width;
    string s;

    cout<<"Enter Length - ";
    cin>>length;
    cout<<endl;

    cout<<"Enter width - ";
    cin>>width;
    cout<<endl;

    //Type
    cout<<"Enter UNIT - ";
    cin>>s;
    cout<<endl;

    if(s == "inch")
    {
       calculation_in_inch(length,width);
    }
    else if(s == "feet")
    {
        calculation_in_feet(length,width);
    }

    return 0;
}
