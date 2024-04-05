function Home() {
    const ctx = React.useContext(UserContext);
    const [authUser,setAuthUser] = React.useState(ctx.currentUser.name);

    
    return (
        <div>
        <Nav
            authUser={authUser}
        />
        <Cardlong
                txtcolor="text-body"
                bgcolor="transparent"
                header="Welcome to Bad Bank"
                title="The baddest bank around"
                text="Bank with the best!"
                body= {(<img src="badbank.png" className="img-fluid" alt="Responsive image"/>)}
            />
        </div>
    );
}
  