function mincost(arr)
{ 
let MinSum=0;
	arr.sort((a,b)=>a-b);
	
	while (arr.length>1) {
		let sum=arr[0]+arr[1];
		arr.shift();
		arr.shift();
		if(sum<arr[0]){
			arr.unshift(sum);
		}
		else if(sum<arr[1]){
			arr.unshift(sum)
		}
		else arr.push(sum)
	MinSum+=sum;
	}
	
	//console.log(MinSum);
	return MinSum;
}

module.exports=mincost;
