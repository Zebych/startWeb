import React,{forwardRef, useMemo} from 'react';
import {useSelector} from 'react-redux';


const ProtectedContent = (props, ref) => {
    const {children, groups, perms, alt} = props;
    // const { isAuthenticated, user } = useAuth();
    const isAuthenticated = useSelector(state => state.auth.isLoggedIn)
    const user = useSelector(state => state.permissions.user)

    // groups the user is a member of
    const userGroups = useMemo(() => {
        if (user?.groups?.length) {
            return user.groups.map((g) => g.name);
        }
        return [];
    }, [user]);

    // all user permissions
    const permsSet = useMemo(() => {
        return user?.user_permissions || [];
    }, [user]);

    let showContent = false;

    // Block rendering content if the user is not authenticated
    if (!isAuthenticated) {
        return <p>User is not authenticated!</p>;
    }

    // If the user is an admin/superuser, grant access to everything
    if (user?.is_superuser) {
        showContent = true;
    } else {
        // Show content if the user is a member of any groups passed as props
        showContent = userGroups.some((group) => groups?.includes(group));

        // Show content if the user has any of the permissions passed as props
        if (!showContent) {
            showContent = permsSet.some((perm) => perms?.includes(perm));
        }
    }

    // Either render the protected content or an alterative for unauthorized users
    return showContent ? <>{children}</> : <>{alt}</>;
}

export default ProtectedContent;