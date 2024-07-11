document.write("To print all the even numbers between 0 and 10 - <br>")
for(let i = 0;i<=10;i+=2)
{
    document.write(i+" ")
}

document.write('<br><br>Check prime number - <br>')
function check_prime(num){
    if (num==2){
        return false
    }
    else if (num < 2 || num%2==0 ){
        return false
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
number = 5
result = check_prime(number)
if(result){
    document.write(number+" is a prime number.")
} else{
    document.write(number+" is NOT a prime number.")
}