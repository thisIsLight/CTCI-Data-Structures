//Write code to remove duplicates from an unsorted list
//Challenge : How to solve it if temporary buffer is not given


var removeDups = (list) => {
    let pointer1 = list.head;
    if(!pointer1.next){
        console.log(flase)
        return;
    }
    while(pointer1.next){
        pointer2 = pointer1.next
        let prev = pointer1;
        while(pointer2.next){
            if(pointer1.val == pointer2.val){
                let nextnode = pointer2.next;
                prev.next = nextnode;
            }
            else{
                prev = prev.next;
                pointer2 = pointer2.next
            }
        }
    }
}
