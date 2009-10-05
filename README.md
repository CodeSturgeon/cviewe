This is a couchapp vendor for a single \_list that explores views.  
 
### Requirements
- **CouchDB 0.9**  
The lists functionality of CouchDB is still evolving and subject to change. This project only supports the current stable, 0.9 series.

- **Couchapp**  
Any recent version should do.
 
### Installing...  
  
    cd .../path_to/my_project
    couchapp vendor install git@github.com:CodeSturgeon/cviewe.git
    cp vendor/cviewe/list_stub.py lists/cviewe.py
  
As soon as couchapp suports vendors we should be able the last step.

### Using...
  
You can now explore any of your views with your options in a form and your JSON prettified.

    http://localhost:5984/your_db/_design/your_doc/_list/cviewe/your_view
