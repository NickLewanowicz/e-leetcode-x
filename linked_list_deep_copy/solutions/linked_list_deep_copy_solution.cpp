class Node {
public:
    int val;
    Node* next;
    Node* random;

    Node() {}

    Node(int _val, Node* _next, Node* _random) {
        val = _val;
        next = _next;
        random = _random;
    }
};

class Solution {
public:

    Node* copyRandomList(Node* head) {
        if(!head){
            return NULL;
        }
        
        Node* curr = head;
        Node* next;
        Node* copy;
        
        while(curr != NULL){
            copy = new Node(curr->val, NULL, NULL);
            next = curr->next;
            curr->next = copy;
            copy->next = next;
            curr = next;
        }
        
        curr = head;
        while(curr != NULL){
            copy = curr->next;
            if(curr->random != NULL){
                copy->random = curr->random->next;
            }
            else{
                curr->random = NULL;
            }
            curr = copy->next;
        }
        
        curr = head;
        Node* newHead = NULL;
        
        while(curr != NULL){
            copy = curr->next;
            curr->next = copy->next;
            
            if(!newHead){
                newHead = copy;
            }
            
            if(copy->next){
                copy->next = copy->next->next;
            }
            else {
                copy->next = NULL;
            }
            
            curr = curr->next;
        }
        
        return newHead;
    }
};